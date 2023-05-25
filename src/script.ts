const tabs = document.querySelectorAll<HTMLDivElement>('.tab');
const panels = document.querySelectorAll<HTMLDivElement>('.panel');
const btn = document.getElementById('menu-btn') as HTMLButtonElement;
const menu = document.getElementById('menu') as HTMLDivElement;
const logo = document.getElementById('logo') as HTMLImageElement;

// Tabs menu event listener
tabs.forEach(tab => tab.addEventListener('click', onTabClick));

function onTabClick(e: MouseEvent):void {
  // Type guard
  const target = e.target as HTMLDivElement;
  if (!target) return;

  // Deactiveate all tabs
  tabs.forEach(tab => {
    tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
  });

  // Hide all panels
  panels.forEach(panel => panel.classList.add('hidden'));

  // Activate new tab and panel based on the target
  target.classList.add('border-softRed', 'border-b-4');

  const classString = target.getAttribute('data-target') as string;
  document.getElementById('panels')?.getElementsByClassName(classString)[0].classList.remove('hidden');
}

// Hamburger button listener
btn.addEventListener('click', navToggle);

function navToggle():void {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}