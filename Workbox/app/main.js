// Camera(document.getElementById('#player')) Native JavaScript
const camera = new Camera( $('#player')[0] );

const _init = () => {

  $('#viewfinder').on("show.bs.modal", () => {
    camera.switch_on();
  });

  $('#viewfinder').on("hidden.bs.modal", () => {
    camera.switch_off();
  });

  // Take photo
  $('#shutter').on("click", () => {
    let photo = camera.take_photo()

    // Show photo preview in camera buttom
    $('#camera').css('background-image', `url(${ photo })`)

  });

  // Submit messages
  $('#send').on("click", () => {
    let caption = $('#caption').val();
    // Check message is OK
    if (!caption) {
      // Show notification and return
      toastr.warning('Photo & Caption Required.', 'Incomplete Message');
      return;
    }

    console.log('adding message');
    console.log(caption);

    // Reset caption & photo on success
    $('#caption').val('');

  });
};
