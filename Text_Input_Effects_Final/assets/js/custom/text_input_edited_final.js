$(document).ready(function(){
    
    //Hoshi Function
    $('#hoshi_input_container').on('focus', '.hoshi_inputs', function(){
        $(this).closest('.hoshi_input_fields').addClass('hoshi_top_text_label');
        $(this).siblings('.hoshi_labels').addClass('hoshi_label_styles');
        $(this).siblings('.hoshi_underline_bottom').addClass('hoshi_underline_color');
    });
    //Hoshi Blur Function
    $('#hoshi_input_container').on('blur', '.hoshi_inputs', function(){
        $(this).closest('.hoshi_input_fields').removeClass('hoshi_top_text_label');
        $(this).siblings('.hoshi_labels').removeClass('hoshi_label_styles');
        $(this).siblings('.hoshi_underline_bottom').removeClass('hoshi_underline_color');

        if($(this).val().length > 0){
            $(this).closest('.hoshi_input_fields').addClass('hoshi_top_text_label');
            $(this).siblings('.hoshi_labels').addClass('hoshi_label_styles');
            $(this).siblings('.hoshi_underline_bottom').addClass('hoshi_underline_color');
        }
        else if($(this).val().length == 0){
            $(this).siblings('.hoshi_labels').removeClass('hoshi_label_styles');
        }
    });

    //Haruki Function
    $('#haruki_input_container').on('focus', '.haruki_inputs', function(){
        $(this).closest('.haruki_input_fields').addClass('haruki_input_field_styles');
        $(this).siblings('.haruki_labels').addClass('addlabel_style');
    });
    //Haruki Blur Function
    $('#haruki_input_container').on('blur', '.haruki_inputs', function(){
        $(this).closest('.haruki_input_fields').removeClass('haruki_input_field_styles');
        $(this).siblings('.haruki_labels').removeClass('addlabel_style');
     
        if($(this).val().length > 0){
            $(this).closest('.haruki_input_fields').addClass('haruki_input_field_styles');
            $(this).siblings('.haruki_labels').addClass('addlabel_style');
        }
        else if($(this).val().length == 0){
            $(this).closest('.haruki_input_fields').removeClass('haruki_input_field_styles');
            $(this).siblings('.haruki_labels').removeClass('addlabel_style');
        }
    });

    //Kohana Function
    $('#kohana_input_container').on('focus', '.kohana_inputs', function(){
       $(this).closest('.kohana_input_fields').addClass('kohana_input_fields_styles');
       $(this).siblings('.kohana_labels').addClass('label_styles');
       $(this).siblings('.kohana_labels').children('.kohana_icon_labels').addClass('kohana_labels_styles');
    });
    // Kohana Blur Function
    $('#kohana_input_container').on('blur', '.kohana_inputs', function(){
        $(this).siblings('.kohana_labels').removeClass('label_styles');
        $(this).closest('.kohana_input_fields').removeClass('kohana_input_fields_styles');
        $(this).siblings('.kohana_labels').children('.kohana_time_label').removeClass('kohana_labels_styles');
        $(this).siblings('.kohana_labels').children('.kohana_line_label').removeClass('kohana_labels_styles');
        $(this).siblings('.kohana_labels').children('.kohana_phone_label').removeClass('kohana_labels_styles');

        if($(this).val().length > 0){
            $(this).siblings('.kohana_labels').addClass('label_styles');
            $(this).closest('.kohana_input_fields').addClass('kohana_input_fields_styles');
            $(this).siblings('.kohana_labels').children('.kohana_time_label').addClass('kohana_labels_styles');
            $(this).siblings('.kohana_labels').children('.kohana_line_label').addClass('kohana_labels_styles');
            $(this).siblings('.kohana_labels').children('.kohana_phone_label').addClass('kohana_labels_styles');
        }
        else if($(this).val().length == 0){
            $(this).siblings('.kohana_labels').removeClass('label_styles');
            $(this).closest('.kohana_input_fields').removeClass('kohana_input_fields_styles');
            $(this).siblings('.kohana_labels').children('.kohana_time_label').removeClass('kohana_labels_styles');
            $(this).siblings('.kohana_labels').children('.kohana_line_label').removeClass('kohana_labels_styles');
            $(this).siblings('.kohana_labels').children('.kohana_phone_label').removeClass('kohana_labels_styles');
        }
    });

    //Manami Function
    $('#manami_input_container').on('focus', '.manami_inputs', function(){
        $(this).addClass('manami_input_styles');
        $(this).closest('.manami_input_fields').addClass('manami_input_fields_styles');
        $(this).siblings('.background_color').addClass('background_color_style');
        $(this).siblings('.manami_labels').addClass('manami_labels_styles');
    });
    //Minami Blur Function
    $('#manami_input_container').on('blur', '.manami_inputs', function(){
        $(this).removeClass('manami_input_styles');
        $(this).closest('.manami_input_fields').removeClass('manami_input_fields_styles');
        $(this).siblings('.background_color').removeClass('background_color_style');
        $(this).siblings('.manami_labels').removeClass('manami_labels_styles');

        if($(this).val().length > 0){
            $(this).addClass('manami_input_styles');
            $(this).closest('.manami_input_fields').addClass('manami_input_fields_styles');
            $(this).siblings('.background_color').addClass('background_color_style');
            $(this).siblings('.manami_labels').addClass('manami_labels_styles');
        }
        else if($(this).val().length == 0){
            $(this).removeClass('manami_input_styles');
            $(this).closest('.manami_input_fields').removeClass('manami_input_fields_styles');
            $(this).siblings('.background_color').removeClass('background_color_style');
            $(this).siblings('.manami_labels').removeClass('manami_labels_styles');
        }
    });

     //Fumi Function
    $('#fumi_input_container').on('focus', '.fumi_inputs', function(){
        $(this).closest('.fumi_input_fields').addClass('fumi_input_fields_styles');
        $(this).siblings('.fumi_labels').children('.fas').addClass('fumi_icon_styles');
        $(this).siblings('.fumi_labels').children('.fa-university').addClass('fumi_icon_course');
        $(this).siblings('.fumi_labels').children('.fa-graduation-cap').addClass('fumi_degree_course');
        $(this).siblings('.fumi_labels').children('.fa-suitcase').addClass('fumi_work_course');
        $(this).siblings('.fumi_labels').children('.fumi_text_labels').addClass('fumi_text_styles');
    });
    //Fumi Function
    $('#fumi_input_container').on('blur', '.fumi_inputs', function(){
        $(this).closest('.fumi_input_fields').removeClass('fumi_input_fields_styles');
        $(this).siblings('.fumi_labels').children('.fas').removeClass('fumi_icon_styles');
        $(this).siblings('.fumi_labels').children('.fa-university').removeClass('fumi_icon_course');
        $(this).siblings('.fumi_labels').children('.fa-graduation-cap').removeClass('fumi_degree_course');
        $(this).siblings('.fumi_labels').children('.fa-suitcase').removeClass('fumi_work_course');
        $(this).siblings('.fumi_labels').children('.fumi_text_labels').removeClass('fumi_text_styles');
        if($(this).val().length > 0){
            $(this).closest('.fumi_input_fields').addClass('fumi_input_fields_styles');
            $(this).siblings('.fumi_labels').children('.fas').addClass('fumi_icon_styles');
            $(this).siblings('.fumi_labels').children('.fa-university').addClass('fumi_icon_course');
            $(this).siblings('.fumi_labels').children('.fa-graduation-cap').addClass('fumi_degree_course');
            $(this).siblings('.fumi_labels').children('.fa-suitcase').addClass('fumi_work_course');
            $(this).siblings('.fumi_labels').children('.fumi_text_labels').addClass('fumi_text_styles');
        }
        else if($(this).val().length == 0){
            $(this).closest('.fumi_input_fields').removeClass('fumi_input_fields_styles');
            $(this).siblings('.fumi_labels').children('.fas').removeClass('fumi_icon_styles');
            $(this).siblings('.fumi_labels').children('.fa-university').removeClass('fumi_icon_course');
            $(this).siblings('.fumi_labels').children('.fa-graduation-cap').removeClass('fumi_degree_course');
            $(this).siblings('.fumi_labels').children('.fa-suitcase').removeClass('fumi_work_course');
            $(this).siblings('.fumi_labels').children('.fumi_text_labels').removeClass('fumi_text_styles');
        }
    });
});