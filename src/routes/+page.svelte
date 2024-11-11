<script>
  function randomColor() {
    const colors = [
      'text-primary', 'text-secondary', 'text-tertiary',
      'text-violet-500', 'text-green-500', 'text-pink-500'
    ]
    const rand = Math.floor(Math.random() * colors.length)

    return colors[rand]
  }

  const socialLinks = [
    {
      href: 'https://github.com/qxb3',
      icon: 'fa-brands fa-github',
      color: randomColor(),
      size: 'text-2xl sm:text-3xl md:text-4xl'
    },
    {
      href: 'https://www.npmjs.com/~qxbthree',
      icon: 'fa-brands fa-npm',
      color: randomColor(),
      size: 'text-4xl sm:text-5xl md:text-6xl'
    },
    {
      href: 'https://www.npmjs.com/~qxbthree',
      icon: 'fa-solid fa-box-open',
      color: randomColor(),
      size: 'text-2xl sm:text-3xl md:text-4xl'
    },
    {
      href: 'https://discord.com/users/591150858830479381',
      icon: 'fa-brands fa-discord',
      color: randomColor(),
      size: 'text-2xl sm:text-3xl md:text-4xl'
    },
    {
      href: 'https://www.facebook.com/qxbthree',
      icon: 'fa-brands fa-facebook',
      color: randomColor(),
      size: 'text-2xl sm:text-3xl md:text-4xl'
    }
  ]
</script>

<div class="h-screen grid place-items-center">
  <div>
    <div class="text-center">
      <h1 class="text-5xl sm:text-6xl md:text-8xl font-bold">
        <span class="text-primary">I'm</span>
        <span class="text-secondary">qxb3</span>
        <i class="text-tertiary">!!</i>
      </h1>
    </div>

    <div class="flex justify-evenly items-center mt-4 mb-8">
      {#each socialLinks as link}
        <a
          href={link.href}
          aria-label={link.href}
        >
          <i class="{link.color} {link.icon} {link.size}"></i>
        </a>
      {/each}
    </div>
  </div>
</div>
