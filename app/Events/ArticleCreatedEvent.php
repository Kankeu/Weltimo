<?php

namespace App\Events;

use App\Article;
use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ArticleCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var Article
     */
    private $article;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param string $article
     * @param User $user
     */
    public function __construct(string $article, User $user)
    {
        $this->article = json_decode($article);
        $this->user = $user;
        $this->article->user->followed = true;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        $channels = [];
        foreach ($this->user->followers as $follower) {
            array_push($channels, new PrivateChannel('article.user.' . $follower->sender_id));
        }
        return $channels;
    }

    public function broadcastWith()
    {
        return [
            'article' => $this->article,
        ];
    }

    public function broadcastWhen()
    {
        return $this->user->followers()->count() > 0;
    }
}
