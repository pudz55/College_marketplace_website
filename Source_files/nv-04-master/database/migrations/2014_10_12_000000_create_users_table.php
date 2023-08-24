<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->id();
            $table->string('names')->unique('names');
            $table->string('email')->unique('email');
            $table->string('gender', 10)->nullable()->default('Others');
            $table->date('dob')->nullable();
            $table->string('course')->nullable();
            $table->text('address')->nullable();
            $table->string('school')->nullable();
            $table->text('schooladdress')->nullable();
            $table->string('bsname')->nullable();
            $table->text('bsdesc')->nullable();
            $table->text('bsaddress')->nullable();
            $table->string('image')->nullable();
            $table->string('status')->nullable()->default('Active');
            $table->enum('role', ['student', 'business', 'school', 'superadmin']);
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
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
