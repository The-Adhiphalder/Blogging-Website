<?php

namespace App\Models; 

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable; 
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable 
{
    use HasFactory, Notifiable;

    protected $table = "users";
    protected $primaryKey = "user_id";
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'email',
        'name',
        'user_name',
        'phone',
        'dob',
        'profile_picture',
        'cover_picture',
        'password', 
    ];

    public function likes()
    {
        return $this->belongsToMany(Post::class, 'likes')->withTimestamps();
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'following_id');
    }
    
    public function isFollowing($userId)
    {
        return $this->following()->where('following_id', $userId)->exists();
    }
    
}