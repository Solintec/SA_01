<?php

defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of frontend
 *
 * @author tony-_000
 */
class frontend_controller extends CI_Controller {

    //aqui tengo que llamar los modelos que requiero
    public function __construct() {
        parent::__construct();
        //$this->load->model("producto_model");
    }

    public function index() {
        echo "hola";
        $data['content'] = 'user/paginaIndex';
        $this->load->view('llamarFrontend', $data);
    }

    public function acercaDe() {
        $data['content'] = 'user/acercaDe';
        $this->load->view('llamarFrontend', $data);
    }

    public function contacto() {
        $data['content'] = 'user/contacto';
        $this->load->view('llamarFrontend', $data);
    }

    public function galeria() {
        $data['content'] = 'user/galeria';
        $this->load->view('llamarFrontend', $data);
    }

    public function servicios() {
        $data['content'] = 'user/servicios';
        $this->load->view('llamarFrontend', $data);
    }

    public function filosofia() {
        $data['content'] = 'user/filosofia';
        $this->load->view('llamarFrontend', $data);
    }

    public function producto() {

        $data['content'] = 'user/productos';
        $this->load->view('llamarFrontend', $data);
    }

}
