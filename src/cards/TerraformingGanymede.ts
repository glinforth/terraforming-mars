
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class TerraformingGanymede implements IProjectCard {
    public cost: number = 33;
    public nonNegativeVPIcon: boolean = true;
    public tags: Array<Tags> = [Tags.JOVIAN, Tags.SPACE];
    public name: string = "Terraforming Ganymede";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Raise your terraform rating 1 step for each jovian tag you have, including this. Gain 2 victory points.";
    public requirements: undefined;
    public description: string = "Why stop at Mars?";
    public canPlay(): boolean {
        return true;
    }
    public play(player: Player, _game: Game) {
        player.terraformRating += 1 + player.getTagCount(Tags.JOVIAN);
        player.victoryPoints += 2;
        return undefined;
    }
}
