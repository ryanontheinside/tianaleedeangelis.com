import { Octokit } from '@octokit/rest';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback data in case of API failures
const fallbackData = {
  user: {
    followers: '100+',
    html_url: 'https://github.com/ryanontheinside'
  },
  repos: [],
  comfyRepos: []
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

async function fetchWithFallback(fetchFn, fallbackValue) {
  try {
    return await fetchFn();
  } catch (error) {
    console.warn(`Fetch failed, using fallback data: ${error.message}`);
    return fallbackValue;
  }
}

async function fetchGitHubData() {
  try {
    const [user, repos] = await Promise.all([
      fetchWithFallback(
        () => octokit.users.getByUsername({ username: 'ryanontheinside' }),
        { data: fallbackData.user }
      ),
      fetchWithFallback(
        () => octokit.repos.listForUser({
          username: 'ryanontheinside',
          sort: 'updated',
          per_page: 10
        }),
        { data: fallbackData.repos }
      )
    ]);

    // Get additional metrics for ComfyUI repos with rate limit awareness
    const comfyRepos = await Promise.all(
      repos.data
        .filter(repo => repo.name.toLowerCase().includes('comfyui'))
        .map(async repo => {
          const [contributors, commits] = await Promise.all([
            fetchWithFallback(
              () => octokit.repos.listContributors({
                owner: 'ryanontheinside',
                repo: repo.name
              }),
              { data: [] }
            ),
            fetchWithFallback(
              () => octokit.repos.listCommits({
                owner: 'ryanontheinside',
                repo: repo.name
              }),
              { data: [] }
            )
          ]);
          
          return {
            ...repo,
            contributorsCount: contributors.data.length,
            commitsCount: commits.data.length
          };
        })
    );

    return { user: user.data, repos: repos.data, comfyRepos };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return fallbackData;
  }
}

async function updateJsonLd(githubData) {
  const jsonLdPath = path.join(process.cwd(), 'src', 'components', 'JsonLd.tsx');
  let content = await fs.readFile(jsonLdPath, 'utf8');

  // Update repository information with enhanced metrics
  const repoDescriptions = githubData.comfyRepos.map(repo => ({
    '@type': 'SoftwareApplication',
    'name': repo.name,
    'description': repo.description,
    'url': repo.html_url,
    'dateModified': repo.updated_at,
    'interactionStatistic': [
      {
        '@type': 'InteractionCounter',
        'interactionType': 'https://schema.org/StarAction',
        'userInteractionCount': repo.stargazers_count
      },
      {
        '@type': 'InteractionCounter',
        'interactionType': 'https://schema.org/ContributeAction',
        'userInteractionCount': repo.contributorsCount
      }
    ]
  }));

  // Update with more authentic language
  const updatedContent = content.replace(
    /const structuredData = {[\s\S]*?}/,
    `const structuredData = ${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ['Person', 'Developer', 'Musician', 'SoftwareEngineer'],
      'name': 'RyanOnTheInside',
      'url': 'https://ryanontheinside.com',
      'jobTitle': 'Solutions Engineer & ComfyUI Specialist',
      'description': 'Experienced developer focused on real-time ML pipelines and ComfyUI tools, contributing to advancements in AI video processing',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Livepeer',
        'url': 'https://livepeer.org',
        'description': 'Decentralized video infrastructure protocol'
      },
      'knowsAbout': [
        ...repoDescriptions,
        {
          '@type': 'Thing',
          'name': 'Machine Learning',
          'description': 'Specialized in real-time ML pipeline architectures and diffusion model optimization'
        }
      ],
      'mainEntity': {
        '@type': 'Project',
        'name': 'ComfyStream',
        'description': 'Real-time streaming integration for ComfyUI, enabling efficient video processing through diffusion models',
        'url': 'https://github.com/ryanontheinside/comfystream',
        'programmingLanguage': ['Python', 'TypeScript'],
        'applicationCategory': 'Machine Learning'
      },
      'sameAs': [
        githubData.user.html_url,
        'https://youtube.com/@ryanontheinside',
        'https://instagram.com/ryanontheinside',
        'https://x.com/ryanontheinside'
      ],
      'interactionStatistic': [
        {
          '@type': 'InteractionCounter',
          'interactionType': 'https://schema.org/FollowAction',
          'userInteractionCount': githubData.user.followers
        }
      ]
    }, null, 2)}`
  );

  await fs.writeFile(jsonLdPath, updatedContent, 'utf8');
}

async function updateAIContext(githubData) {
  const aiContextPath = path.join(process.cwd(), 'src', 'components', 'AIContext.tsx');
  let content = await fs.readFile(aiContextPath, 'utf8');

  // Enhanced project metrics with more authentic language
  const projectsSection = `
        <section data-context="project-highlights">
          <h2>Notable Projects</h2>
          ${githubData.comfyRepos.map(project => `
          <article data-project="${project.name.toLowerCase()}">
            <h3>${project.name}</h3>
            <dl>
              <dt>Project Focus</dt>
              <dd>${project.description}</dd>
              <dt>Community Engagement</dt>
              <dd>${project.stargazers_count} GitHub stars</dd>
              <dt>Development Metrics</dt>
              <dd>${project.commitsCount} commits from ${project.contributorsCount} contributors</dd>
              <dt>Last Updated</dt>
              <dd>${new Date(project.updated_at).toLocaleDateString()}</dd>
              <dt>Technical Documentation</dt>
              <dd>
                <a href="${project.html_url}/blob/main/README.md" data-doc-type="readme">Documentation</a>
                <a href="${project.html_url}/wiki" data-doc-type="wiki">Wiki</a>
              </dd>
            </dl>
          </article>
          `).join('\n')}
        </section>

        <section data-context="technical-expertise">
          <h2>Technical Focus Areas</h2>
          <ul>
            <li data-expertise="ml-pipelines">
              <span data-attribute="focus">Real-time ML pipeline optimization specialist</span>
              <span data-attribute="technologies">Python, TypeScript, ComfyUI, Livepeer</span>
              <span data-attribute="current-work">Developing efficient streaming integration for diffusion models</span>
            </li>
            <li data-expertise="creative-tech">
              <span data-attribute="focus">Technical implementation of creative tools</span>
              <span data-attribute="technologies">Stable Diffusion, ComfyUI, WebGL</span>
              <span data-attribute="applications">Real-time video processing, interactive systems</span>
            </li>
          </ul>
        </section>

        <section data-context="changelog" data-last-updated="${new Date().toISOString()}">
          <h2>Recent Updates</h2>
          <ul>
            ${githubData.comfyRepos.slice(0, 3).map(repo => `
            <li data-update="${repo.name}">
              <time datetime="${repo.updated_at}">${new Date(repo.updated_at).toLocaleDateString()}</time>
              <span data-update-type="project">Updated ${repo.name}</span>
            </li>
            `).join('\n')}
          </ul>
        </section>
  `;

  const updatedContent = content.replace(
    /<section data-context="project-highlights">[\s\S]*?<\/section>/,
    projectsSection
  );

  await fs.writeFile(aiContextPath, updatedContent, 'utf8');
}

async function main() {
  try {
    console.log('Starting content update...');
    const githubData = await fetchGitHubData();
    
    await Promise.all([
      updateJsonLd(githubData).catch(error => {
        console.error('Error updating JSON-LD:', error);
        return null;
      }),
      updateAIContext(githubData).catch(error => {
        console.error('Error updating AI Context:', error);
        return null;
      })
    ]);

    console.log('Content updated successfully');
  } catch (error) {
    console.error('Error in main execution:', error);
    process.exit(1);
  }
}

main(); 