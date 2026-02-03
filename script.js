const orbs = document.querySelectorAll('.floating-orb');
const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (event) => {
  const { width, height, left, top } = hero.getBoundingClientRect();
  const x = (event.clientX - left) / width - 0.5;
  const y = (event.clientY - top) / height - 0.5;

  orbs.forEach((orb, index) => {
    const depth = (index + 1) * 12;
    orb.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

hero.addEventListener('mouseleave', () => {
  orbs.forEach((orb) => {
    orb.style.transform = '';
  });
});
