<script>
  import { fly } from 'svelte/transition'
  import { base } from '$app/paths'

  let { data } = $props()

  let navLinks = $state([
    { active: false, href: '/', text: 'Home', color: 'text-primary', bgColor: 'bg-primary' },
    { active: false, href: '/about', text: 'About', color: 'text-secondary', bgColor: 'bg-secondary' },
    { active: false, href: '/projects', text: 'Projects', color: 'text-tertiary', bgColor: 'bg-tertiary' }
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

<nav class="md:fixed md:left-4 md:h-screen md:w-fit theme !bg-surface md:!bg-transparent z-10 flex md:flex-col">
  <ul class="flex justify-evenly w-full md:flex-col md:h-full md:justify-center md:w-fit items-center md:space-y-6 md:pt-0 pt-8 z-10">
    {#each navLinks as link}
      <li>
        <a
          href="{base}{link.href}"
          class="{link.color} flex w-[95%] h-fit md:h-[95%] md:w-fit justify-evenly items-center gap-1"
        >
          {#if link.active && window.innerWidth < 768}
              <span
                in:fly={{ y: -40, duration: window.innerHeight, delay: window.innerHeight }}
                out:fly={{ y: -40, duration: window.innerHeight }}
                class="w-3 h-3 md:w-[2px] md:h-full {link.bgColor}"></span>
          {/if}

          {#if link.active && window.innerWidth >= 768}
              <span
                in:fly={{ x: -20, duration: window.innerHeight, delay: window.innerHeight }}
                out:fly={{ x: -20, duration: window.innerHeight }}
                class="md:w-[2px] md:h-full {link.bgColor}"></span>
          {/if}

          <div class="flex w-full h-fit md:flex-col items-center justify-center md:h-full md:w-fit">
            {#each link.text.split('') as text}
              <p>{text}</p>
            {/each}
          </div>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  li, a {
    @apply scale-anim uppercase no-underline not-italic underline-offset-2 font-bold;
  }
</style>
