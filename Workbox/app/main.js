// Camera(document.getElementById('#player')) Native JavaScript
const camera = new Camera( $('#player')[0] );

const _init = () => {

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
    console.log(camera.photo);
    // Check message is OK
    if (!camera.photo || !caption) {
      // Show notification and return
      toastr.warning('Photo & Caption Required.', 'Incomplete Message')
      return;
    }

    // Render new message in feed
    renderMessage({ photo: camera.photo, caption })

    // Reset caption & photo on success
    $('#caption').val('')
    $('#camera').css('background-image', '').removeClass('withphoto')
    camera.photo = null
  });
};

// Create new message getElementById
const renderMessage = (message) => {

  let msgHTML = `
  <div class="row message bg-light mb-2 rounded shadow">
    <div class="col-2 p-1">
      <img src="${message.photo}" class="photo w-100 rounded">
    </div>
    <div class="col-10 p-1">${message.caption}</div>
  </div>
  `;

  // Prepend to messages
  $(msgHTML).prependTo('#messages');
}
