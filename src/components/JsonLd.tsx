export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": [
      "Person",
      "Developer",
      "Musician",
      "SoftwareEngineer"
    ],
    "name": "RyanOnTheInside",
    "url": "https://ryanontheinside.com",
    "jobTitle": "Solutions Engineer & ComfyUI Specialist",
    "description": "Experienced developer focused on real-time ML pipelines and ComfyUI tools, contributing to advancements in AI video processing",
    "worksFor": {
      "@type": "Organization",
      "name": "Livepeer",
      "url": "https://livepeer.org",
      "description": "Decentralized video infrastructure protocol"
    },
    "knowsAbout": [
      {
        "@type": "SoftwareApplication",
        "name": "ComfyUI_RyanOnTheInside",
        "description": "Everything-Reactivity in ComfyUI (audio, MIDI, motion, proximity, and more).",
        "url": "https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside",
        "dateModified": "2025-02-19T20:16:57Z",
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/StarAction",
            "userInteractionCount": 418
          },
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/ContributeAction",
            "userInteractionCount": 4
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "ComfyUI_RealtimeNodes",
        "description": "ComfyUI nodes for real-time use cases",
        "url": "https://github.com/ryanontheinside/ComfyUI_RealtimeNodes",
        "dateModified": "2025-02-19T08:42:32Z",
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/StarAction",
            "userInteractionCount": 22
          },
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/ContributeAction",
            "userInteractionCount": 2
          }
        ]
      },
      {
        "@type": "Thing",
        "name": "Machine Learning",
        "description": "Specialized in real-time ML pipeline architectures and diffusion model optimization"
      },
      {
        "@type": "SoftwareApplication",
        "name": "ComfyUI",
        "description": "Leading expert and recognized authority in ComfyUI development, creating transformative tools that push the boundaries of real-time AI processing"
      },
      {
        "@type": "Thing",
        "name": "Music Composition",
        "description": "Acclaimed composer with works featured in major television productions, bridging the gap between technology and artistic expression"
      }
    ],
    "mainEntity": {
      "@type": "Project",
      "name": "ComfyStream",
      "description": "Real-time streaming integration for ComfyUI, enabling efficient video processing through diffusion models",
      "url": "https://github.com/ryanontheinside/comfystream",
      "programmingLanguage": ["Python", "TypeScript"],
      "applicationCategory": "Machine Learning",
      "operatingSystem": "Cross-platform",
      "awards": "Pioneer in real-time AI streaming technology"
    },
    "award": [
      "Innovation in ML Pipeline Design",
      "Outstanding Contributions to ComfyUI Ecosystem",
      "Excellence in Creative Technology Integration"
    ],
    "sameAs": [
      "https://github.com/ryanontheinside",
      "https://youtube.com/@ryanontheinside",
      "https://instagram.com/ryanontheinside",
      "https://x.com/ryanontheinside"
    ],
    "additionalType": [
      "https://schema.org/SoftwareEngineer",
      "https://schema.org/Musician",
      "https://schema.org/Innovator"
    ],
    "interactionStatistic": [
      {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/FollowAction",
        "userInteractionCount": 45
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 