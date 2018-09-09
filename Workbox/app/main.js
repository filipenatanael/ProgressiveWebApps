// Camera(document.getElementById('#player')) Native JavaScript
const camera = new Camera( $('#player')[0] );

const _init = () => {

  const message = new Message()

  $('#viewfinder').on("show.bs.modal", () => {
    camera.switch_on()
  });

  $('#viewfinder').on("hidden.bs.modal", () => {
    camera.switch_off()
  });

  // Take photo
  $('#shutter').on("click", () => {
    let photo = camera.take_photo()
    // Show photo preview in camera buttom
    $('#camera').css('background-image', `url(${photo})`).addClass('withphoto')
  });

  // Submit messages
  $('#send').on("click", () => {
    let caption = $('#caption').val()

    if (!camera.photo || !caption) {
      // Show notification and return
      toastr.warning('Photo & Caption Required.', 'Incomplete Message')
      return;
    }

    // Render new message in feed: renderMessage({ photo: camera.photo, caption })
    let msg = message.add(camera.photo, caption)
    renderMessage(msg)

    // Reset caption & photo on success
    $('#caption').val('')
    $('#camera').css('background-image', '').removeClass('withphoto')
    camera.photo = null
  });
};

// Create new message getElementById
const renderMessage = (msg) => {
  let msgHTML = `
  <div style="display:none" class="row message bg-light mb-2 rounded shadow">
    <div class="col-2 p-1">
      <img src="${msg.photo}" class="photo w-100 rounded">
    </div>
    <div class="col-10 p-1">${msg.caption}</div>
  </div>
  `;
  // Prepend to messages
  $(msgHTML).prependTo('#messages').show(500)
  .find('img').on("click", showPhoto);
}

const showPhoto = (e) => {
  let photoSource = $(e.currentTarget).attr('src')
  // Set to and show photoframe modal
  $('#photoframe img').attr('src', photoSource)
  $('#photoframe').modal('show')
}
