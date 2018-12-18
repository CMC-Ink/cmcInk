const onFlipCard = function () {
    $('.frontCard').hide();
    $('.backCard').show();
  }

const addHandlers = () => {
    $('.backCard').hide();
    $('#flipCard').on('click', onFlipCard)
  }

  $(() => {
    addHandlers()
  })
