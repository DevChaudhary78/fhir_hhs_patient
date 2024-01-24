<template>
  <header>
    <h1 id="title">
      HHS Create Patient 👩
    </h1>
    <nav>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
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
  background: #fbf8cc;
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
  padding: 0.3rem;
  border-radius: 0.2rem;
  color: #003049;
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
