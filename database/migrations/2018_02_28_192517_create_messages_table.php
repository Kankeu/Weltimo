<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('request_id');
            $table->foreign('request_id')->references('id')
                ->on('requests')->onDelete('cascade');
            $table->unsignedInteger('sender_id');
            $table->foreign('sender_id')->references('id')
                ->on('users')->onDelete('cascade');
            $table->unsignedInteger('receiver_id');
            $table->foreign('receiver_id')->references('id')
                ->on('users')->onDelete('cascade');
            $table->longText('message');
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
        Schema::dropIfExists('messages');
    }
}
