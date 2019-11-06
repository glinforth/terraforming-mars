
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { ResourceType } from "../ResourceType";

export class Tardigrades implements IProjectCard {
    public cost: number = 4;
    public nonNegativeVPIcon: boolean = true;
    public resourceType: ResourceType = ResourceType.MICROBE;
    public tags: Array<Tags> = [Tags.MICROBES];
    public name: string = "Tardigrades";
    public cardType: CardType = CardType.ACTIVE;
    public actionText: string = "Add 1 microbe to this card";
    public text: string = "Gain 1 victory point per 4 microbes on this card";
    public requirements: undefined;
    public description: string = "These microscopic creatures can survive freezing, boiling, drying out, heavy radiation, and brute force";
    public canPlay(): boolean {
        return true;
    }
    public onGameEnd(player: Player) {
        player.victoryPoints += Math.floor(player.getResourcesOnCard(this) / 4);
    }
    public play() {
        return undefined;
    }
    public action(player: Player) {
        player.addResourceTo(this);
        return undefined;
    }
    public canAct(): boolean {
        return true;
    }    
}
