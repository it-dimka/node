document.addEventListener('click', (event) => {
  const target = event.target;
  const id = target.dataset.id;
  switch (target.dataset.type) {
    case 'remove':
      remove(id).then(() => {
        target.closest('li').remove();
      });
      break;
    case 'edit':
      const title = prompt('Введите новое название:');
      if (title) {
        edit(id, title).then(() => {
          target.closest('li').children[0].innerHTML = title
        });
      }
      break;
    default:
      break;
  }
});

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'});
}

async function edit(id, title) {
  const note = {id, title}
  await fetch(`/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(note)});
}
