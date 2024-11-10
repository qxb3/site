<script>
  let { data } = $props()
  import { base } from '$app/paths'

  let navLinks = $state([
    { active: false, href: '/', text: 'Home', color: 'text-primary' },
    { active: false, href: '/about', text: 'About', color: 'text-secondary' },
    { active: false, href: '/projects', text: 'Projects', color: 'text-tertiary' }
  ])

  $effect(() => {
    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i]

      if (link.href === data.url) {
        navLinks[i].active = true
      } else {
        navLinks[i].active = false
      }
    }
  })
</script>

<nav class="theme border-b-2 border-primary-light dark:border-primary-dark p-4 shadow-sm shadow-primary-light flex justify-between items-center">
  <div class="transform transition-transform duration-500 hover:scale-110">
    <a
      href="{base}/"
      class="!lowercase !no-underline !font-bold !text-secondary !text-xl transition-colors duration-500 hover:!text-primary"
    >
      <div class="flex items-center">
        <p class="text-primary">q</p>
        <p class="text-primary">x</p>
        <p class="text-secondary">b</p>
        <p class="text-tertiary">3</p>
      </div>
    </a>
  </div>

  <ul class="flex justify-evenly items-center space-x-6">
    {#each navLinks as link}
      <li>
        <a
          href="{base}{link.href}"
          class:!underline={link.active}
          class="{link.color}"
        >
          {link.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  li, a {
    @apply scale-anim uppercase no-underline not-italic hover:underline underline-offset-2 font-bold;
  }
</style>
