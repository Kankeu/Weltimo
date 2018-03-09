<?php

namespace App\Events;

use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class MessageCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var string
     */
    private $message;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param string $message
     * @param User $user
     */
    public function __construct(string $message, User $user)
    {
        $message = json_decode($message);
        $message->user = $user;
        $this->message = $message;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('App.User.'.$this->message->receiver_id);
    }

    public function broadcastWith()
    {
        return [
            'data' => $this->message,
        ];
    }
}
