const _init = () => {

  // Switch on camera in viewfinder
  $('#viewfinder').on("show.bs.modal", () => {
    console.log('camera on');
  });

  // Switch off camera in viewfinders
  $('#viewfinder').on("hidden.bs.modal", () => {
    console.log('camera off');
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
