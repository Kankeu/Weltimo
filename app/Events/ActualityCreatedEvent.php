<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ActualityCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var string
     */
    private $article;

    /**
     * Create a new event instance.
     *
     * @param string $article
     */
    public function __construct(string $article)
    {
        $this->article = json_decode($article);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('weltimo.newsletter');
    }

    public function broadcastWith()
    {
        return [
            'article' => $this->article,
        ];
    }
}
