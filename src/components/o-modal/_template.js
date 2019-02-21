import html from 'nanohtml';

export default ({ open }, childrenFragment) => {
  const closeModalByClickingOutside = event => {
    if (event.target.id === 'modal-wrapper') closeModal();
  };

  const closeModal = () => {
    var modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
    modal.classList.add('is-hidden');
  };

  return html`
    ${open}

    <div
      id="modal-wrapper"
      class="modal ${open ? '' : 'is-hidden'}"
      onclick="${closeModalByClickingOutside}"
    >
      <div class="modal-content">
        <span class="close"
          ><axa-icon icon="cross-gap" onclick="${closeModal}"></axa-icon
        ></span>

        <div>${childrenFragment}</div>
      </div>
    </div>
  `;
};
