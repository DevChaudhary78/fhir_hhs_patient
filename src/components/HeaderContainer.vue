<template>
  <header>
    <h1 id="title">HHS Create Patient 👩</h1>
    <nav>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/create">
          <li>Create</li>
        </a>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--main-bg-h-f);
  color: var(--light-black);
  padding: 1rem;
}

nav {
  width: 20%;
}

nav>ul {
  display: flex;
  justify-content: center;
}

nav>ul>a {
  text-decoration: none;
  font-size: 1.3rem;
  background: #ffcfd2;
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;
  color: var(--light-black);
  margin: 0 1rem;
}

nav>ul>a:hover {
  scale: 1.05;
}

nav>ul>a>li {
  text-decoration: none;
  list-style: none;
}
</style>
