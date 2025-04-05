<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Model
{
    //
    use HasFactory;

    protected $table = "admins";
    protected $primaryKey = "admin_id";

    protected $fillable = [
        'admin_name',
        'password',
        'profile_pic', 
    ];

}
