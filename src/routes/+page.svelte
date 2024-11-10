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
      size: 'fa-2xl'
    },
    {
      href: 'https://www.npmjs.com/~qxbthree',
      icon: 'fa-brands fa-npm',
      color: randomColor(),
      size: 'text-5xl'
    },
    {
      href: 'https://www.npmjs.com/~qxbthree',
      icon: 'fa-solid fa-box-open',
      color: randomColor(),
      size: 'fa-2xl'
    },
    {
      href: 'https://discord.com/users/591150858830479381',
      icon: 'fa-brands fa-discord',
      color: randomColor(),
      size: 'fa-2xl'
    },
    {
      href: 'https://www.facebook.com/qxbthree',
      icon: 'fa-brands fa-facebook',
      color: randomColor(),
      size: 'fa-2xl'
    }
  ]
</script>

<div class="grid place-items-center py-44">
  <div>
    <div class="text-center mt-4">
      <h1 class="text-8xl font-bold">
        <span class="text-primary">I'm</span>
        <span class="text-secondary">qxb3</span>
        <i class="text-tertiary">!!</i>
      </h1>
    </div>

    <div class="flex justify-evenly items-center mt-4">
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
