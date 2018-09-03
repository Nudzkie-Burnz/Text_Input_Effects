<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../assets/css/text_input2_edited.css">
    <link rel="stylesheet" href="../assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <script src="../assets/js/vendor/jquery-min.js"></script>
    <script src="../assets/js/custom/text_input.js"></script>
    <script src="../assets/js/vendor/bootstrap.min.js"></script>
    <title>Text Inputs 2</title>
</head>
<body>
    <div id="wrapper">
        <h1>Text Input Effects 2</h1>
        <div class="box">
            <div id="ruri">
                <h2>Ruri</h2>
                <div id="ruri_input_container">
                    <div id="ruri_username_container" class="input-group ruri_input_fields">
                        <input type="text" id="ruri_username" class="ruri_inputs" aria-describedby="basic-addon1">
                        <label for="ruri_username" class="ruri_labels">Username</label>
                    </div>
                    <div id="ruri_email_container" class="input-group ruri_input_fields">
                        <input type="email" id="ruri_email" class="ruri_inputs" aria-describedby="basic-addon1">
                        <label for="ruri_email" class="ruri_labels">Website</label>
                    </div>
                    <div id="ruri_code_container" class="input-group ruri_input_fields">
                        <input type="text" id="ruri_code" class="ruri_inputs" aria-describedby="basic-addon1">
                        <label for="ruri_code" class="ruri_labels">Invitation Code</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="box">
            <div id="manami">
                <h2>Manami</h2>
                <div id="manami_input_container">
                    <div id="manami_username_container" class="input-group manami_input_fields">
                        <div class="background_color"></div>
                        <input type="text" id="manami_username" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_username" class="manami_labels">Username</label>
                    </div>
                    <div id="manami_email_container" class="input-group manami_input_fields">
                        <div class="background_color"></div>
                        <input type="email" id="manami_email" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_email" class="manami_labels">Website</label>
                    </div>
                    <div id="manami_code_container" class="input-group manami_input_fields">
                        <div class="background_color"></div>
                        <input type="text" id="manami_code" class="manami_inputs" aria-describedby="basic-addon1">
                        <label for="manami_code" class="manami_labels">Invitation Code</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="box">
            <div id="chisato">
                <h2>Chisato</h2>
                <div id="chisato_input_container">
                    <div id="chisatomain_firstname_container" class="chisato_main_container">      
                        <div id="chisato_firstname_container" class="input-group chisato_input_fields">
                            <div class="chisato_back_container">
                                <input type="text" id="chisato_firstname" class="chisato_inputs" aria-describedby="basic-addon1">
                                <label for="chisato_firstname" class="chisato_labels">Firstname</label>
                            </div>
                        </div>
                    </div>
                    <div id="chisatomain_middlename_container" class="chisato_main_container">              
                        <div id="chisato_middlename_container" class="input-group chisato_input_fields">
                            <div class="chisato_back_container">
                                <input type="email" id="chisato_middlename" class="chisato_inputs" aria-describedby="basic-addon1">
                                <label for="chisato_middlename" class="chisato_labels">Middlename</label>
                            </div>
                        </div>
                    </div>
                    <div id="chisatomain_lastname_container" class="chisato_main_container">
                        <div id="chisato_lastname_container" class="input-group chisato_input_fields">
                            <div class="chisato_back_container">
                                <input type="text" id="chisato_lastname" class="chisato_inputs" aria-describedby="basic-addon1">
                                <label for="chisato_lastname" class="chisato_labels">Lastname</label>
                            </div>
                        </div>
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