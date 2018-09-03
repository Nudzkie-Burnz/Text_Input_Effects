$(document).ready(function(){
    
    //Hideo Function
    $('.hideo_input_container').on('focus', '.hideo_inputs', function(){
        $(this).addClass('input_padding');
        $(this).siblings('.hideo_icon_container').addClass('hideo_input_styles');
        $(this).siblings('.hideo_icon_container').find('.glyphicon').addClass('icon_reduce');
    });
    //Hideo Blur Function
    $('.hideo_input_container').on('blur', '.hideo_inputs', function(){
        $(this).removeClass('input_padding');
        $(this).siblings('.hideo_icon_container').removeClass('hideo_input_styles');
        $(this).siblings('.hideo_icon_container').find('.glyphicon').removeClass('icon_reduce');

        if($(this).val().length > 0){
            $(this).addClass('input_padding');
            $(this).siblings('.hideo_icon_container').addClass('hideo_input_styles');
            $(this).siblings('.hideo_icon_container').find('.glyphicon').addClass('icon_reduce');
        }
        else if($(this).val().length == 0){
            $(this).removeClass('input_padding');
            $(this).siblings('.hideo_icon_container').removeClass('hideo_input_styles');
            $(this).siblings('.hideo_icon_container').find('.glyphicon').removeClass('icon_reduce');
        }
    });

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

    //Juro function
    $('#juro_input_container').on('focus', '.juro_inputs', function(){
        $(this).addClass('juro_input_styles');
        $(this).siblings().addClass('juro_label_styles');
        $(this).closest('.juro_input_fields').addClass('juro_container_styles');
    });
    //Juro Blur Function
    $('#juro_input_container').on('blur', '.juro_inputs', function(){
        $(this).removeClass('juro_input_styles');
        $(this).closest('.juro_input_fields').removeClass('juro_container_styles');
        $(this).siblings().removeClass('juro_label_styles');
        if($(this).val().length > 0){
            $(this).addClass('juro_input_styles');
            $(this).siblings().addClass('juro_label_styles');
            $(this).closest('.juro_input_fields').addClass('juro_container_styles');
        }
        else if($(this).val().length == 0){
            $(this).removeClass('juro_input_styles');
            $(this).siblings().removeClass('juro_label_styles');
            $(this).closest('.juro_input_fields').removeClass('juro_container_styles');
        }
    });

    //Madoka Functions
    $('#madoka_input_container').on('focus', '.madoka_inputs', function(){
        $(this).addClass('madoka_input_styles');
        $(this).closest('#madoka_freq').siblings('#madoka_frequency').addClass('frequency_style');
        $(this).closest('#madoka_weig').siblings('#madoka_weight').addClass('frequency_style');
        $(this).closest('#madoka_stren').siblings('#madoka_strength').addClass('frequency_style');
        $(this).siblings('.right').addClass('right_style');
        $(this).siblings('.top').addClass('top_style');
        $(this).siblings('.left').addClass('left_style');
    });
    $('#madoka_input_container').on('blur', '.madoka_inputs', function(){
        $(this).removeClass('madoka_input_styles');
        $(this).closest('#madoka_freq').siblings('#madoka_frequency').removeClass('frequency_style');
        $(this).closest('#madoka_weig').siblings('#madoka_weight').removeClass('frequency_style');
        $(this).closest('#madoka_stren').siblings('#madoka_strength').removeClass('frequency_style');
        $(this).siblings('.right').removeClass('right_style');
        $(this).siblings('.top').removeClass('top_style');
        $(this).siblings('.left').removeClass('left_style');
        
        if($(this).val().length > 0){
            $(this).addClass('madoka_input_styles');
            $(this).closest('#madoka_freq').siblings('#madoka_frequency').addClass('frequency_style');
            $(this).closest('#madoka_weig').siblings('#madoka_weight').addClass('frequency_style');
            $(this).closest('#madoka_stren').siblings('#madoka_strength').addClass('frequency_style');
            $(this).siblings('.right').addClass('right_style');
            $(this).siblings('.top').addClass('top_style');
            $(this).siblings('.left').addClass('left_style');
        }
        else if($(this).val().length == 0){
            $(this).removeClass('madoka_input_styles');
            $(this).closest('#madoka_freq').siblings('#madoka_frequency').removeClass('frequency_style');
            $(this).closest('#madoka_weig').siblings('#madoka_weight').removeClass('frequency_style');
            $(this).closest('#madoka_stren').siblings('#madoka_strength').removeClass('frequency_style');
            $(this).siblings('.right').removeClass('right_style');
            $(this).siblings('.top').removeClass('top_style');
            $(this).siblings('.left').removeClass('left_style');
        }
    });
});