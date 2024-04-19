<script lang="ts">
    import {fade, fly} from "svelte/transition";
</script>

<svelte:head>
    <title>Experience | Bishwas</title>
</svelte:head>


<div class="experience-intro" in:fade>
    <h1>Experience</h1>
    <p>
        I have been working as a software developer since 2020, and I have been working as a freelancer since 2018.
        As I have already indexed by <a href="/projects">projects</a>, I have worked on a variety of projects,
        ranging from bot development, desktop application development, and web development.
    </p>
</div>

<div class="experiences">
    <div class="experience" in:fly={{y: 50, duration: 500}}>
        <div class="experience-item">
            <iconify-icon icon="mdi:brain" class="bg-purple-500 text-purple-100"></iconify-icon>
            <div class="experience-item-title">
                <h2>Blogstorm.AI</h2>
                <div class="project-info">
                    <span class="explained">April 2023 - PRESENT (Full Stack Engineer)</span>
                    <a href="https://app.blogstorm.ai/" target="_blank"
                       class="link">
                        <span>Visit project</span>
                        <iconify-icon icon="mdi:open-in-new"/>
                    </a>
                </div>
            </div>
        </div>

        <p>
            Blogstorm.AI is an AI-based articles and blog writing system with SEO analysis and integration on it
            associated with a US-based company called Rankiit LLC. I am Full Stack Engineering with backend, frontend
            and prompt engineering services. Basically, I single handedly developed the whole system from scratch.
        </p>

        <ul>
            <li>Develop microservices, tasks modules and APIs; Django/FastAPI</li>
            <li>Developing and designing frontend with SvelteKit and Tailwind CSS</li>
            <li>Integrate the backend with the frontend</li>
            <li>CI/CD web services; Github Actions, AWS Lambda and EC2</li>
            <li>Test the feature integrations</li>
            <li>WordPress plugins development and API integration</li>
            <li>Develop bots and crawlers to perform specific tasks</li>
        </ul>
    </div>

    <div class="experience" in:fly={{y: 50, duration: 500, delay: 90}}>
        <div class="experience-item">
            <iconify-icon icon="ph:code-fill" class="bg-indigo-500 text-purple-100"></iconify-icon>
            <div class="experience-item-title">
                <div class="flex items-center gap-3">
                    <h2>REtech software</h2>
                    <span class="text-xs text-gray-500/75 uppercase">[Part-time]</span>
                </div>
                <div class="project-info">
                    <span class="explained">January 2024 - April 2024 (Svelte/Kit Freelance Developer)</span>
                    <a href="https://retech-software.de/" target="_blank"
                       class="link">
                        <span>Visit company page</span>
                        <iconify-icon icon="mdi:open-in-new"/>
                    </a>
                </div>
            </div>
        </div>

        <p>
            REtech software is a German-based company that develops software solutions for companies. I was working
            here as a Svelte/Kit developer, and was responsible for developing the frontend of the web app.
        </p>

        <ul>
            <li>Develop frontend with Svelte/Kit and Tailwind CSS</li>
            <li>Integrate the backend with the frontend</li>
            <li>Test the feature integrations</li>
            <li>Co-operate with the backend developers</li>
        </ul>
    </div>

    <div class="experience" in:fly={{y: 50, duration: 500, delay: 100}}>
        <div class="experience-item">
            <iconify-icon icon="teenyicons:python-solid" class="bg-yellow-500 text-yellow-100"></iconify-icon>
            <div class="experience-item-title">
                <h2>Cynical Technology</h2>
                <span class="explained">Dec 2022 - 20 April 2023 (Mid. Python Developer)</span>
            </div>
        </div>
        <p>
            Cynical Tech is a cyber security company, and I primarily do backend and API development here as Python
            Developer. As frontend is also something I enjoy a lot to do, so I am working here as a full-stack
            developer.
        </p>

        <ul>
            <li>Develop API, automated bots, task scheduling, and backend</li>
            <li>Develop frontend based on provided design</li>
            <li>Developing and designing frontend with NextJs/ReactJS and Tailwind CSS</li>
            <li>Deployment on relative AWS instance</li>
        </ul>

    </div>

    <div class="experience" in:fly={{y: 50, duration: 500, delay: 200}}>
        <div class="experience-item">
            <iconify-icon icon="jam:fiverr" class="bg-emerald-500 text-emerald-100"></iconify-icon>
            <div class="experience-item-title">
                <h2>Fiverr</h2>
                <div class="project-info">
                    <span class="explained">2018 - 2020 (Full Stack Developer/Freelancer)</span>
                    <a href="https://fiverr.com/bishwasbh" target="_blank"
                       class="link">
                        <span>Visit profile</span>
                        <iconify-icon icon="mdi:open-in-new"/>
                    </a>
                </div>
            </div>
        </div>
        <p>
            I have been working as a freelancer on Fiverr since 2018, worked on a variety of projects,
            ranging from bot development, desktop application development, and web development.
        </p>

        <ul>
            <li>Design and develop bots for Discord, Telegram, and Twitter</li>
            <li>Build desktop applications using ElectronJS and Python as a backend</li>
            <li>Develop web apps using Django, ReactJS, and NextJS</li>
            <li>Develop APIs using Django, Flask or FastAPI</li>
            <li>Develop and design frontend with NextJs/ReactJS and Tailwind CSS</li>
            <li>Integrate the backend with the frontend</li>
            <li>Deploy the web app to web servers</li>
            <li>Fix bugs and issues in the existing codebase of clients</li>
        </ul>
    </div>

    <div class="experience" in:fly={{y: 50, duration: 500, delay: 300}}>
        <div class="experience-item">
            <iconify-icon icon="mdi:forum" class="bg-cyan-500 text-cyan-100"></iconify-icon>
            <div class="experience-item-title w-full">
                <h2>Webmatrices</h2>
                <div class="project-info">
                    <span class="explained">2020 - PRESENT (Admin)</span>
                    <a href="https://webmatrices.com/" target="_blank"
                       class="link">
                        <span>Visit project</span>
                        <iconify-icon icon="mdi:open-in-new"/>
                    </a>
                </div>
            </div>
        </div>

        <p>
            I have been working as a software developer and project admin at Webmatrices since 2020, an online community
            where people could get their SEO, programming, blogging and Google Adsense-related issues solved.
        </p>

        <ul>
            <li>Maintain, sustain, fix (if any) and update forum tech sides</li>
            <li>Response to community members and help them with their issues</li>
            <li>Filter out unwanted or spammy content using the system features</li>
            <li>Add new features, apps and APIs</li>
        </ul>
    </div>
</div>

<div class="experience-outro">
    <p>
        I have also worked on a variety of projects, ranging from bot development, desktop application development,
        and web development. You can check out my projects <a class="link-inked" href="/projects">here</a>.
    </p>
</div>
<style lang="postcss">
    .experience-intro {
        @apply max-w-3xl;
    }

    .experience-intro h1 {
        @apply text-4xl font-bold text-gray-900 dark:text-gray-100 mb-0;
    }

    .experience-intro p {
        @apply mt-4 text-gray-700 dark:text-gray-300;
    }

    .experiences {
        @apply max-w-3xl mt-8;
        @apply flex flex-col gap-6;
    }

    .experience {
        @apply flex flex-col gap-2;
    }

    .experience-item {
        @apply flex items-start gap-4;
    }

    .experience-item iconify-icon:first-child {
        @apply mt-0.5 w-10 h-10 rounded-full
        flex items-center justify-center flex-shrink-0 text-xl;
    }

    .experience-item-title {
        @apply flex flex-col gap-0 w-full;
    }

    .experience-item-title h2 {
        @apply text-xl font-semibold text-gray-900 dark:text-gray-100;
    }

    .experience-item-title .explained {
        @apply text-xs text-gray-700 dark:text-gray-300;
    }

    .experience p {
        @apply text-base text-gray-700 dark:text-gray-300;
        @apply ml-4;
    }

    .experience ul {
        @apply mt-2 list-disc list-inside;
        @apply text-sm text-gray-700 dark:text-gray-300;
        @apply ml-4;
    }

    .experience-outro {
        @apply max-w-3xl mt-8;
    }

    .project-info {
        @apply flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-full;
    }

    .project-info .link {
        @apply flex items-center gap-2 text-xs text-indigo-700 dark:text-indigo-300;
    }

    .project-info .link iconify-icon {
        @apply w-4 h-4 text-xs;
    }
</style>