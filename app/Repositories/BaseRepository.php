<?php

namespace App\Repositories;

abstract class BaseRepository implements BaseInterface
{
    protected $_model;
    protected $_table;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct(){
        $this->initModel();
    }

    /**
     * setModel
     *
     * @return void
     */
    abstract public function setModel();

    public function initModel(){
        $this->_model = app()->make($this->setModel());
        $this->_table = $this->_model->getTable();
    }
    public function getAll()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        $result = $this->model->find($id);

        return $result;
    }

    public function create($attributes = [])
    {
        return $this->model->create($attributes);
    }

    public function update($id, $attributes = [])
    {
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);
            return $result;
        }

        return false;
    }

    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }
}


