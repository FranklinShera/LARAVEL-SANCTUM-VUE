<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       User::create([
           'name' => "Admin",
           'email' => "admin@sanctum.sc",
           'password' => Hash::make('pas123_'),
       ]);


        User::create([
            'name' => "Franklin Shera",
            'email' => "fs@sanctum.sc",
            'password' => Hash::make('shera_madeIt'),
        ]);
    }
}
