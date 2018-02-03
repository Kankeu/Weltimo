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

class ActualityCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var string
     */
    private $actuality;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @param string $actuality
     * @param User $user
     */
    public function __construct(string $actuality, User $user)
    {
        $this->actuality = json_decode($actuality);
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
            array_push($channels, new PrivateChannel('actuality.user.' . $follower->sender_id));
        }
        return $channels;
    }

    public function broadcastWith()
    {
        return [
            'actuality' => $this->actuality,
        ];
    }

    public function broadcastWhen()
    {
        return $this->user->followers()->count() > 0;
    }
}
