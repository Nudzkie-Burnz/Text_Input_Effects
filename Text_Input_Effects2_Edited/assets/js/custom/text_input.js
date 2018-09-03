$(document).ready(function(){
    //Ruri Function
    $('#ruri_input_container').on('focus', '.ruri_inputs', function(){
        $(this).addClass('ruri_input_styles');
        $(this).siblings('.ruri_labels').addClass('ruri_label_styles');
    });
    //Ruri Blur Function
    $('#ruri_input_container').on('blur', '.ruri_inputs', function(){
        $(this).removeClass('ruri_input_styles');
        $(this).siblings('.ruri_labels').removeClass('ruri_label_styles');

        if($(this).val().length > 0){
            $(this).addClass('ruri_input_styles');
            $(this).siblings('.ruri_labels').addClass('ruri_label_styles');
        }
        else if($(this).val().length == 0){
            $(this).removeClass('ruri_input_styles');
            $(this).siblings('.ruri_labels').removeClass('ruri_label_styles');
        }
    });

    //Manami Function
    $('#manami_input_container').on('focus', '.manami_inputs', function(){
        $(this).addClass('manami_input_styles');
        $(this).siblings('.background_color').addClass('background_color_style');
        $(this).siblings('.manami_labels').addClass('manami_labels_styles');
    });
    //Minami Blur Function
    $('#manami_input_container').on('blur', '.manami_inputs', function(){
        $(this).removeClass('manami_input_styles');
        $(this).siblings('.background_color').removeClass('background_color_style');
        $(this).siblings('.manami_labels').removeClass('manami_labels_styles');

        if($(this).val().length > 0){
            $(this).siblings('.background_color').addClass('background_color_style');
            $(this).siblings('.manami_labels').addClass('manami_labels_styles');
        }
        else if($(this).val().length == 0){
            $(this).siblings('.background_color').removeClass('background_color_style');
            $(this).siblings('.manami_labels').removeClass('manami_labels_styles');
        }
    });

     //Chisato Function
    $('#chisato_input_container').on('focus', '.chisato_inputs', function(){
        $(this).parent('.chisato_back_container').parent('.chisato_input_fields').addClass('input_fields_border');
        $(this).parent('.chisato_back_container').parent('#chisato_firstname_container').siblings('#firstname_label').addClass('display_labels');
        $(this).parent('.chisato_back_container').parent('#chisato_middlename_container').siblings('#middlename_label').addClass('display_labels');
        $(this).parent('.chisato_back_container').parent('#chisato_lastname_container').siblings('#lastname_label').addClass('display_labels');
        $(this).siblings('.chisato_labels').addClass('chisato_back_styles');
    });
    //Chisato Blur Function
    $('#chisato_input_container').on('blur', '.chisato_inputs', function(){
        $(this).parent('.chisato_back_container').parent('.chisato_input_fields').removeClass('input_fields_border');
        $(this).parent('.chisato_back_container').parent('#chisato_firstname_container').siblings('#firstname_label').removeClass('display_labels');
        $(this).parent('.chisato_back_container').parent('#chisato_middlename_container').siblings('#middlename_label').removeClass('display_labels');
        $(this).parent('.chisato_back_container').parent('#chisato_lastname_container').siblings('#lastname_label').removeClass('display_labels');
        $(this).siblings('.chisato_labels').removeClass('chisato_back_styles');

        if($(this).val().length > 0){
            $(this).parent('.chisato_back_container').parent('.chisato_input_fields').addClass('input_fields_border');
            $(this).parent('.chisato_back_container').parent('#chisato_firstname_container').siblings('#firstname_label').addClass('display_labels');
            $(this).parent('.chisato_back_container').parent('#chisato_middlename_container').siblings('#middlename_label').addClass('display_labels');
            $(this).parent('.chisato_back_container').parent('#chisato_lastname_container').siblings('#lastname_label').addClass('display_labels');
            $(this).siblings('.chisato_labels').addClass('chisato_back_styles');
        }
        else if($(this).val().length == 0){
            $(this).parent('.chisato_back_container').parent('.chisato_input_fields').removeClass('input_fields_border');
            $(this).parent('.chisato_back_container').parent('#chisato_firstname_container').siblings('#firstname_label').removeClass('display_labels');
            $(this).parent('.chisato_back_container').parent('#chisato_middlename_container').siblings('#middlename_label').removeClass('display_labels');
            $(this).parent('.chisato_back_container').parent('#chisato_lastname_container').siblings('#lastname_label').removeClass('display_labels');
            $(this).siblings('.chisato_labels').removeClass('chisato_back_styles');
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