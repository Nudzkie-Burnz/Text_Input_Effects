<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../assets/css/text_input_edited.css">
    <link rel="stylesheet" href="../assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <script src="../assets/js/vendor/jquery-min.js"></script>
    <script src="../assets/js/custom/text_input_edited.js"></script>
    <script src="../assets/js/vendor/bootstrap.min.js"></script>
    <title>Text Inputs Edited</title>
</head>
<body>
    <div id="wrapper">
        <h1>Text Input Effects 1</h1>
        <div class="box">
            <div id="hideo">
                <h2>HIDEO</h2>
                <div id="hideo_input_container" class="hideo_input_container">
                    <div id="hideo_username" class="input-group hideo_input_fields">
                        <input type="text" id="hideo_username_input" class="hideo_inputs" aria-describedby="basic-addon1">
                        <label for="hideo_username_input" class="hideo_icon_container user_icon">
                            <span class="glyphicon glyphicon-user"></span>
                        </label>
                    </div>
                    <div id="hideo_email" class="input-group hideo_input_fields">
                        <input type="email" id="hideo_email_input" class="hideo_inputs" aria-describedby="basic-addon1">
                        <label for="hideo_email_input" class="hideo_icon_container email_icon">
                            <span class="glyphicon glyphicon-envelope"></span>
                        </label>
                    </div>
                    <div id="hideo_password" class="input-group hideo_input_fields">
                        <input type="password" id="hideo_password_input" class="hideo_inputs" aria-describedby="basic-addon1">
                        <label for="hideo_password_input" class="hideo_icon_container password_icon">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

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
            <div id="juro">
                <h2>Juro</h2>
                <div id="juro_input_container">
                    <div id="juro_username" class="input-group juro_input_fields">
                        <input type="text" id="juro_fname_input" class="juro_inputs" aria-describedby="basic-addon1">
                        <label for="juro_fname_input" class="juro_labels juro_name" for="name">First Name</label>
                    </div>
                    <div id="juro_email" class="input-group juro_input_fields">
                        <input type="text" id="juro_lname_input" class="juro_inputs" aria-describedby="basic-addon1">
                        <label for="juro_lname_input" class="juro_labels juro_email" for="email">Last Name</label>
                    </div>
                    <div id="juro_password" class="input-group juro_input_fields">
                        <input type="text" id="juro_mname_input" class="juro_inputs" aria-describedby="basic-addon1">
                        <label for="juro_mname_input" class="juro_labels juro_town" for="town">Maiden Name</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="box">
            <div id="madoka">
                <h2>Madoka</h2>
                <div id="madoka_input_container">
                    <span id="madoka_frequency" class="madoka_labels">Frequency</span>
                    <div id="madoka_freq" class="input-group madoka_input_fields">
                        <input type="text" class="madoka_inputs" aria-describedby="basic-addon1">
                        <span class="madoka_borders right"></span>
                        <span class="madoka_borders top"></span>
                        <span class="madoka_borders left"></span>
                    </div>
                    <span id="madoka_weight" class="madoka_labels">Weight</span>
                    <div id="madoka_weig" class="input-group madoka_input_fields">
                        <input type="text" class="madoka_inputs" aria-describedby="basic-addon1">
                        <span class="madoka_borders right"></span>
                        <span class="madoka_borders top"></span>
                        <span class="madoka_borders left"></span>
                    </div>
                    <span id="madoka_strength" class="madoka_labels">Strength</span>
                    <div id="madoka_stren" class="input-group madoka_input_fields">
                        <input type="text" class="madoka_inputs" aria-describedby="basic-addon1">
                        <span class="madoka_borders right"></span>
                        <span class="madoka_borders top"></span>
                        <span class="madoka_borders left"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>