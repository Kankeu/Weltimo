<?php

namespace App\Events;

use App\Discussionstate;
use App\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class NextStep implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    /**
     * @var Discussionstate
     */
    private $discussionstate;
    /**
     * @var User
     */
    private $user;
    /**
     * @var User
     */
    private $to;

    /**
     * Create a new event instance.
     *
     * @param Discussionstate $discussionstate
     * @param User $user
     * @param User $to
     */
    public function __construct(Discussionstate $discussionstate, User $user, User $to)
    {
        $this->discussionstate = $discussionstate;
        $this->user = $user;
        $this->to = $to;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('App.User.'.$this->to->id);
    }

    public function broadcastWith()
    {
        return [
            'discussionstate' => $this->discussionstate,
            'user' => $this->user
        ];
    }
}
