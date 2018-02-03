<?php

namespace App\Jobs;

use App\Events\BookCreatedEvent;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class BookPublish implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    /**
     * @var string
     */
    private $book;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new job instance.
     *
     * @param string $book
     * @param User $user
     */
    public function __construct(string $book, User $user)
    {
        //
        $this->book = $book;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        broadcast((new BookCreatedEvent($this->book,$this->user)));
    }
}
