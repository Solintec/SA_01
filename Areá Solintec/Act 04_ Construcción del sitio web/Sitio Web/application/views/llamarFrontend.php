<?php


$this->load->view('template/head');
$this->load->view('template/nav');

//$this->load->view('template/header');

$this->load->view($content);

$this->load->view('template/footer');
