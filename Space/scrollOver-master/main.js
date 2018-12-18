//console.log('got here')

const onMoonClick = function () {
    $('#message').text('You now see the Moon King! You will never Impress him!')
    $('#message').css('background-Color', 'gold')
    setTimeout(() => $('#message').text(''), 5000)
    $('.container').hide()
    $('#firstPage').show()
  }

const addHandlers = () => {
    //find the element with the id "nextView" & on click, run the onMoonClickFunction
    $('#nextView').on('click', onMoonClick)
  }
//on document ready
  $(() => {
    addHandlers()
  })
