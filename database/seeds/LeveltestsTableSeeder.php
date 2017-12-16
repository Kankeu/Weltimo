<?php

use Illuminate\Database\Seeder;

class LeveltestsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create('fr_FR');
        $levels = ["A1","A2","B1","B2","C1"];

        foreach ($levels as $level){
           for($n=1;$n<=10;$n++){
               $data = [
                   "level" => $level,
                   "sentence" => $faker->paragraph
               ];
               $statement = \App\Leveltest::create($data);
               for($i=1;$i<=3;$i++){
                   $answer = [
                       "level" => $level,
                       "sentence" => $faker->sentence,
                       "just" => 3%$i,
                       "leveltest_id" => $statement->id
                   ];
                   \App\Leveltest::create($answer);
               }
           }
        }



        DB::table('users')->insert([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
