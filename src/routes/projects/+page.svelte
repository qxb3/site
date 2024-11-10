<script>
  function randomTxtColor() {
    const colors = [
      'text-primary', 'text-secondary', 'text-tertiary',
      'text-violet-500', 'text-green-500', 'text-pink-500'
    ]
    const rand = Math.floor(Math.random() * colors.length)

    return colors[rand]
  }

  function randomBgColor() {
    const colors = [
      'bg-primary', 'bg-secondary', 'bg-tertiary',
      'bg-violet-500', 'bg-green-500', 'bg-pink-500'
    ]
    const rand = Math.floor(Math.random() * colors.length)

    return colors[rand]
  }

  const projects = [
    {
      image: '/projects/gruvbox.hypr.png',
      href: 'https://github.com/qxb3/gruvbox.hypr',
      name: 'gruvbox.hypr',
      description: 'Gruvbox in Hyprland',
      categories: ['ricing', 'linux']
    },
    {
      image: '/projects/aspl.png',
      href: 'https://github.com/qxb3/aspl',
      name: 'aspl',
      description: 'A Simple Programming Language',
      categories: ['rust', 'programming language']
    },
    {
      image: '/projects/iris.png',
      href: 'https://github.com/qxb3/iris',
      name: 'iris',
      description: 'A command like in-memory database in rust ',
      categories: ['rust', 'database']
    },
    {
      image: '/projects/the_coffee_bean.png',
      href: 'https://the-coffee-bean-tea-lea.vercel.app/',
      name: 'The Coffeee Bean Tea Lea',
      description: 'A Coffee/Cofeee Bean Store',
      categories: ['web dev', 'js', 'sveltekit']
    },
    {
      image: '/projects/join_slackers.png',
      href: 'https://join-slackers.netlify.app/',
      name: 'Slackers',
      description: 'A official guild website for slackers ',
      categories: ['web dev', 'js', 'sveltekit']
    },
    {
      image: '/projects/mirage_helper.png',
      href: 'https://github.com/qxb3/mirage-helper',
      name: 'Mirage Helper',
      description: 'A simple discord bot for mirage realms',
      categories: ['discord', 'bot', 'js']
    },
  ]
</script>

<div class="sm:p-8 md:p-16 p-4 py-8">
  <h1 class="lg:flex text-4xl font-bold items-center justify-center flex-row text-center gap-4">
    <p class="text-primary">Notable</p>
    <p class="text-secondary underline">Projects</p>
  </h1>

  <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8 px-4 lg:px-16">
    {#each projects as project}
      <a
        href={project.href}
        target="_blank"
        class="block scale-anim bg-gray-950 rounded-md border-2 border-secondary shadow shadow-secondary no-underline not-italic"
      >
        <img src={project.image} alt={project.name} />

        <div class="p-4">
          <h1 class="text-2xl font-bold {randomTxtColor()}">* {project.name}</h1>
          <p class="mt-2 text-white">{project.description}</p>

          <div class="flex gap-2 text-sm mt-2">
            {#each project.categories as category}
              <div class="rounded-md {randomBgColor()} text-white px-2">
                {category}
              </div>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
