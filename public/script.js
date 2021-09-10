$(function () {
  $('#datetimepicker12').datetimepicker({
    inline: true,
    sideBySide: false
  })
})

// !function(a){a.fn.datepicker.dates["pt-BR"]={days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],daysShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],daysMin:["Do","Se","Te","Qu","Qu","Se","Sa"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],today:"Hoje",monthsTitle:"Meses",clear:"Limpar",format:"dd/mm/yyyy"}}(jQuery);

$.fn.datetimepicker.dates['pt'] = {
  days: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ],
  daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  daysMin: ['Se', 'Te', 'Qu', 'Qu', 'Qui', 'Se', 'Sa', 'Su'],
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  today: 'Hoje'
}
