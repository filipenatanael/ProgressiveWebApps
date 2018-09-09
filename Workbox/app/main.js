// Camera(document.getElementById('#player')) Native JavaScript
const camera = new Camera( $('#player')[0] );

const _init = () => {

  // Switch on camera in viewfinder
  $('#viewfinder').on("show.bs.modal", () => {
    camera.switch_on();
  });

  // Switch off camera in viewfinders
  $('#viewfinder').on("hidden.bs.modal", () => {
    camera.switch_off();
  });

  // Take photo
  $('#shutter').on("click", () => {
    console.log('take photo');
  });

  // Submit messages
  $('#send').on("click", () => {

    // Get caption text
    let caption = $('#caption').val();

    // Check message is ok
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
