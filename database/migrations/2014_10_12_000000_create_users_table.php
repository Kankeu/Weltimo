<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('forename');
            $table->string('email')->unique();
            $table->string('level')->nullable();
            $table->string('role')->nullable();
            $table->string('avatar')->default('/img/default/avatar.jpg');
            $table->string('cover')->default('/img/default/cover.jpg');
            $table->string('password')->nullable();
            $table->boolean('confirmated')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
