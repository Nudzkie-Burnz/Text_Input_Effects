<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../assets/css/text_input_edited_final.css">
    <link rel="stylesheet" href="../assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <script src="../assets/js/vendor/jquery-min.js"></script>
    <script src="../assets/js/custom/text_input_edited_final.js"></script>
    <script src="../assets/js/vendor/bootstrap.min.js"></script>
    <title>Text Inputs Edited</title>
</head>
<body>
    <div id="wrapper">
        <h1>Text Input Effects Final</h1>
        <div class="box">
            <div id="hoshi">
                <h2>HOSHI</h2>
                <div id="hoshi_input_container">
                    <div id="hoshi_username_input" class="input-group hoshi_input_fields">
                        <input type="text" id="hoshi_name" class="hoshi_inputs" aria-describedby="basic-addon1">
                        <label for="hoshi_name" class="hoshi_labels hoshi_name" for="name">Name</label>
                        <div id="hoshi_underline_name" class="hoshi_underline_bottom"></div>
                    </div>
                    <div id="hoshi_email_input" class="input-group hoshi_input_fields">
                        <input type="email" id="hoshi_email" class="hoshi_inputs" aria-describedby="basic-addon1">
                        <label for="hoshi_email" class="hoshi_labels hoshi_email" for="email">Street</label>
                        <div id="hoshi_underline_email" class="hoshi_underline_bottom"></div>
                    </div>
                    <div id="hoshi_town_input" class="input-group hoshi_input_fields">
                        <input type="texts" id="hoshi_town" class="hoshi_inputs" aria-describedby="basic-addon1">
                        <label for="hoshi_town" class="hoshi_labels hoshi_town" for="town">Town</label>
                        <div id="hoshi_underline_town" class="hoshi_underline_bottom"></div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="box">
            <div id="haruki">
                <h2>Haruki</h2>
                <div id="haruki_input_container">
                    <div id="haruki_username" class="input-group haruki_input_fields">
                        <input type="text" id="haruki_main_input_name" class="haruki_inputs" aria-describedby="basic-addon1">
                        <label for="haruki_main_input_name" class="haruki_labels haruki_name" for="name">Firstname</label>
                    </div>
                    <div id="hoshi_email" class="input-group haruki_input_fields">
                        <input type="text" id="haruki_main_input_email" class="haruki_inputs" aria-describedby="basic-addon1">
                        <label for="haruki_main_input_email" class="haruki_labels haruki_email" for="email">Lastname</label>
                    </div>
                    <div id="hoshi_password" class="input-group haruki_input_fields">
                        <input type="email" id="haruki_main_input_psswd" class="haruki_inputs" aria-describedby="basic-addon1">
                        <label for="haruki_main_input_psswd" class="haruki_labels haruki_town" for="town">Email</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div id="kohana">
                <h2>Kohana</h2>
                <div id="kohana_input_container">
                    <div id="kohana_time_container" class="input-group kohana_input_fields">
                        <input type="text" id="kohana_time" class="kohana_inputs" aria-describedby="basic-addon1">
                        <label id="kohana_label_phone" for="kohana_time" class="kohana_labels">Time</label>
                    </div>
                    <div id="kohana_line_container" class="input-group kohana_input_fields">
                        <input type="text" id="kohana_line" class="kohana_inputs" aria-describedby="basic-addon1">
                        <label id="kohana_label_phone" for="kohana_email" class="kohana_labels">Line</label>
                    </div>
                    <div id="kohana_phone_container" class="input-group kohana_input_fields">
                        <input type="text" id="kohana_phone" class="kohana_inputs" aria-describedby="basic-addon1">
                        <label id="kohana_label_phone" for="kohana_phone" class="kohana_labels">Phone</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div id="manami">
                <h2>Manami</h2>
                <div id="manami_input_container">
                    <div id="manami_username_container" class="input-group manami_input_fields">
                        <input type="text" id="manami_username" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_username" class="manami_labels">Username</label>
                    </div>
                    <div id="manami_email_container" class="input-group manami_input_fields">
                        <input type="email" id="manami_email" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_email" class="manami_labels">Website</label>
                    </div>
                    <div id="manami_code_container" class="input-group manami_input_fields">
                        <input type="text" id="manami_code" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_code" class="manami_labels">Invitation Code</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div id="fumi">
                <h2>Fumi</h2>
                <div id="fumi_input_container">
                    <div id="fumi_course_container" class="input-group fumi_input_fields">
                        <input type="text" id="fumi_course" class="fumi_inputs" aria-describedby="basic-addon1">
                        <label for="fumi_course" id="course_label" class="fumi_labels">
                            <i class="fas fa-university"></i>
                            <span class="fumi_course_label fumi_text_labels">Course Name</span>
                        </label>
                    </div>
                    <div id="fumi_degree_container" class="input-group fumi_input_fields">   
                        <input type="text" id="fumi_degree" class="fumi_inputs" aria-describedby="basic-addon1">
                        <label for="fumi_degree" id="degree_label" class="fumi_labels">
                            <i class="fas fa-graduation-cap"></i>
                            <span class="fumi_degree_label fumi_text_labels">Degree</span>
                        </label>
                    </div>
                    <div id="fumi_work_container" class="input-group fumi_input_fields">
                        <input type="text" id="fumi_work" class="fumi_inputs" aria-describedby="basic-addon1">
                        <label for="fumi_work" id="work_label" class="fumi_labels">
                            <i class="fas fa-suitcase"></i>
                            <span class="fumi_work_label fumi_text_labels">Work Place</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>