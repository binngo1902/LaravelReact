<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;

class UserRepository extends BaseRepository implements UserRepositoryInterface {

    public function setModel()
    {
        return User::class;
    }

    public function getUser($email){
        return $this->_model->where('account',$email)->first();
    }

}
