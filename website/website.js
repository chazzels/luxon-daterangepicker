$(document).ready(function() {
    
    window.DateTime = luxon.DateTime;
    
    $('#config-text').keyup(function() {
      eval($(this).val());
    });
    
    $('.configurator input, .configurator select').change(function() {
      updateConfig();
    });

    $('.demo i').click(function() {
      $(this).parent().find('input').click();
    });

    $('#startDate').daterangepicker({
      singleDatePicker: true,
      startDate: DateTime.local().minus({days: 6}),
    });

    $('#endDate').daterangepicker({
      singleDatePicker: true,
      startDate: DateTime.local(),
    });

    //updateConfig();

    function updateConfig() {
      var options = {};

      if ($('#singleDatePicker').is(':checked'))
        options.singleDatePicker = true;
      
      if ($('#showDropdowns').is(':checked'))
        options.showDropdowns = true;

      if ($('#minYear').val().length && $('#minYear').val() != 1)
        options.minYear = parseInt($('#minYear').val(), 10);

      if ($('#maxYear').val().length && $('#maxYear').val() != 1)
        options.maxYear = parseInt($('#maxYear').val(), 10);

      if ($('#showWeekNumbers').is(':checked'))
        options.showWeekNumbers = true;

      if ($('#showISOWeekNumbers').is(':checked'))
        options.showISOWeekNumbers = true;

      if ($('#timePicker').is(':checked'))
        options.timePicker = true;
      
      if ($('#timePicker24Hour').is(':checked'))
        options.timePicker24Hour = true;

      if ($('#timePickerIncrement').val().length && $('#timePickerIncrement').val() != 1)
        options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 10);

      if ($('#timePickerSeconds').is(':checked'))
        options.timePickerSeconds = true;
      
      if ($('#autoApply').is(':checked'))
        options.autoApply = true;

      if ($('#maxSpan').is(':checked'))
        options.maxSpan = { days: 7 };


/*
      if ($('#ranges').is(':checked')) {
        options.ranges = {
          'Today': [DateTime().local(), DateTime().local()],
          'Yesterday': [DateTime().local().minus({days: 1), DateTime().local().minus({days: 1})],
          'Last 7 Days': [DateTime().local().mius({days: 6}), DateTime().local()],
          'Last 30 Days': [DateTime().local().minus({days: 29}), DateTime().local()],
          'This Month': [DateTime().local().startOf('month'), DateTime().local().endOf('month')],
          'Last Month': [DateTime().local().minus({month: 1}).startOf('month'), DateTime().local().minus({months: 1}).endOf('month')]
        };
      }
      */
      
      /* LUXONO - DISABLE
      if ($('#locale').is(':checked')) {
        options.locale = {
          format: 'MM/DD/YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          weekLabel: 'W',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          firstDay: 1
        };
      }
      */

      if (!$('#linkedCalendars').is(':checked'))
        options.linkedCalendars = false;

      if (!$('#autoUpdateInput').is(':checked'))
        options.autoUpdateInput = false;

      if (!$('#showCustomRangeLabel').is(':checked'))
        options.showCustomRangeLabel = false;

      if ($('#alwaysShowCalendars').is(':checked'))
        options.alwaysShowCalendars = true;

      if ($('#parentEl').val().length)
        options.parentEl = $('#parentEl').val();

      if ($('#startDate').val().length) 
        options.startDate = $('#startDate').val();

      if ($('#endDate').val().length)
        options.endDate = $('#endDate').val();
      
      if ($('#minDate').val().length)
        options.minDate = $('#minDate').val();

      if ($('#maxDate').val().length)
        options.maxDate = $('#maxDate').val();

      if ($('#opens').val().length && $('#opens').val() != 'right')
        options.opens = $('#opens').val();

      if ($('#drops').val().length && $('#drops').val() != 'down')
        options.drops = $('#drops').val();

      if ($('#buttonClasses').val().length && $('#buttonClasses').val() != 'btn btn-sm')
        options.buttonClasses = $('#buttonClasses').val();

      if ($('#applyButtonClasses').val().length && $('#applyButtonClasses').val() != 'btn-primary')
        options.applyButtonClasses = $('#applyButtonClasses').val();

      if ($('#cancelButtonClasses').val().length && $('#cancelButtonClasses').val() != 'btn-default')
        options.cancelClass = $('#cancelButtonClasses').val();

      $('#config-demo').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.toFormat('yyyy-MM-dd') + ' to ' + end.toFormat('yyyy-MM-dd') + ' (predefined range: ' + label + ')'); });
      
      if (typeof options.ranges !== 'undefined') {
        options.ranges = {};
      }

      var option_text = JSON.stringify(options, null, '    ');

      var replacement = "ranges: {\n"
          + "        'Today': [DateTime().local(), DateTime().local()],\n"
          + "        'Yesterday': [DateTime().local().minus({days: 1}), DateTime().local().minus({days: 1)],\n"
          + "        'Last 7 Days': [DateTime().local().minus({days: 6}), DateTime().local()],\n"
          + "        'Last 30 Days': [DateTime().local().minus({days: 29}), DateTime().local()],\n"
          + "        'This Month': [DateTime().local().startOf('month'), DateTime().local().endOf('month')],\n"
          + "        'Last Month': [DateTime().local().minus({month: 1}).startOf('month'), DateTime().local().minus({month: 1}).endOf('month')]\n"
          + "    }";
      option_text = option_text.replace(new RegExp('"ranges"\: \{\}', 'g'), replacement);

      $('#config-text').val("$('#demo').daterangepicker(" + option_text + ", function(start, end, label) {\n  console.log('New date range selected: ' + start.toFormat('yyyy-MM-dd') + ' to ' + end.toFormat('yyyy-MM-dd') + ' (predefined range: ' + label + ')');\n});");

    }

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 180) {
          $('.leftcol').css('position', 'fixed');
          $('.leftcol').css('top', '10px');
        } else {
          $('.leftcol').css('position', 'absolute');
          $('.leftcol').css('top', '180px');
        }
    });

    var bg = new Trianglify({
      x_colors: ["#e1f3fd", "#eeeeee", "#407dbf"],
      y_colors: 'match_x',
      width: document.body.clientWidth,
      height: 150,
      stroke_width: 0,
      cell_size: 20
    });

    $('#jumbo').css('background-image', 'url(' + bg.png() + ')');

});
