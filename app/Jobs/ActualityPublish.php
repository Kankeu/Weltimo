<?php

namespace App\Jobs;

use App\Events\ArticleCreatedEvent;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ActualityPublish implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    /**
     * @var string
     */
    private $article;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new job instance.
     *
     * @param string $article
     * @param User $user
     */
    public function __construct(string $article, User $user)
    {
        $this->article = $article;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        broadcast((new ArticleCreatedEvent($this->article,$this->user)));
    }
}
