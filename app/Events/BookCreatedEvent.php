<?php

namespace App\Events;

use App\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class BookCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var string
     */
    private $book;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param string $book
     * @param User $user
     */
    public function __construct(string $book, User $user)
    {
        $this->book = json_decode($book);
        $this->user = $user;
        $this->book->user->followed = true;
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
            array_push($channels, new PrivateChannel('book.user.' . $follower->sender_id));
        }
        return $channels;
    }

    public function broadcastWith()
    {
        return [
            'book' => $this->book,
        ];
    }

    public function broadcastWhen()
    {
        return $this->user->followers()->count() > 0;
    }
}
