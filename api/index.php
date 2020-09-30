<?php
    $phrase64 = hash('sha256', getenv('PASS_KEY') . $_POST['service'] . $_POST['aikotoba']);
    $phrase = [];

    preg_match('/[a-z](.{14})[a-z]/', $phrase64, $phrase);

    while(!count($phrase)) {
        $phrase64 = hash('sha256', $phrase64);
        preg_match('/[a-z](.{14})[a-z]/', $phrase64, $phrase);
    }

    echo $phrase[0];
?>