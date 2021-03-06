import * as React from "react";
import {
  ListingDetailPhaseCardComponentProps,
  PhaseWithExpiryProps,
  ChallengePhaseProps,
  RevealVoteProps,
  AppealDecisionProps,
  AppealChallengePhaseProps,
} from "./types";
import {
  StyledListingDetailPhaseCardContainer,
  StyledListingDetailPhaseCardSection,
  StyledCardStage,
  StyledCard,
  StyledCardClose,
  StyledCardFront,
  StyledCardBack,
  StyledPhaseKicker,
  StyledPhaseDisplayName,
  FormHeader,
  FormCopy,
  FullWidthButton,
} from "./styledComponents";
import { buttonSizes } from "../Button";
import { ChallengeResults, ChallengeResultsProps } from "../ChallengeResultsChart";
import { TwoPhaseProgressBarCountdownTimer } from "../PhaseCountdown/";
import { RevealVote } from "./RevealVote";
import { ChallengePhaseDetail } from "./ChallengePhaseDetail";
import { AppealDecisionDetail } from "./AppealDecisionDetail";
import { NeedHelp } from "./NeedHelp";

export type AppealChallengeRevealVoteCardProps = ListingDetailPhaseCardComponentProps &
  PhaseWithExpiryProps &
  ChallengePhaseProps &
  RevealVoteProps &
  ChallengeResultsProps &
  AppealDecisionProps &
  AppealChallengePhaseProps;

export interface AppealChallengeRevealVoteCardState {
  flipped: boolean;
}

export class AppealChallengeRevealVoteCard extends React.Component<
  AppealChallengeRevealVoteCardProps,
  AppealChallengeRevealVoteCardState
> {
  constructor(props: AppealChallengeRevealVoteCardProps) {
    super(props);
    this.state = { flipped: false };
  }

  public render(): JSX.Element {
    return (
      <StyledCardStage width="485">
        <StyledCard flipped={this.state.flipped}>
          <StyledCardFront>
            <StyledListingDetailPhaseCardContainer>
              <StyledListingDetailPhaseCardSection>
                <StyledPhaseKicker>Challenge ID {this.props.challengeID}</StyledPhaseKicker>
                <StyledPhaseKicker>Appeal Challenge ID {this.props.appealChallengeID}</StyledPhaseKicker>
                <StyledPhaseDisplayName>Challenge Appeal Decision</StyledPhaseDisplayName>
                <TwoPhaseProgressBarCountdownTimer
                  endTime={this.props.endTime}
                  totalSeconds={this.props.phaseLength}
                  displayLabel="Revealing votes"
                  secondaryDisplayLabel="Accepting votes"
                  flavorText="under challenge"
                  activePhaseIndex={1}
                />
              </StyledListingDetailPhaseCardSection>

              <ChallengePhaseDetail
                challengeID={this.props.challengeID}
                challenger={this.props.challenger}
                rewardPool={this.props.rewardPool}
                stake={this.props.stake}
              />

              <StyledListingDetailPhaseCardSection>
                <ChallengeResults
                  collapsable={true}
                  totalVotes={this.props.totalVotes}
                  votesFor={this.props.votesFor}
                  votesAgainst={this.props.votesAgainst}
                  percentFor={this.props.percentFor}
                  percentAgainst={this.props.percentAgainst}
                />
              </StyledListingDetailPhaseCardSection>

              <AppealDecisionDetail appealGranted={this.props.appealGranted} />

              <StyledListingDetailPhaseCardSection bgAccentColor="REVEAL_VOTE">
                {this.renderRevealVote()}
              </StyledListingDetailPhaseCardSection>

              <NeedHelp />
            </StyledListingDetailPhaseCardContainer>
          </StyledCardFront>

          <StyledCardBack>
            <StyledListingDetailPhaseCardContainer>
              <StyledListingDetailPhaseCardSection bgAccentColor="REVEAL_VOTE">
                <StyledCardClose>
                  <span onClick={this.swapFlipped}>✖</span>
                </StyledCardClose>
                <FormHeader>Confirm Your Votes. Make Them Count!</FormHeader>
                <FormCopy>
                  Confirm with your secret phrase and earn CVL tokens should the challenge results end in your favor.
                </FormCopy>
              </StyledListingDetailPhaseCardSection>
              <StyledListingDetailPhaseCardSection>
                <StyledPhaseKicker>Appeal Challenge ID {this.props.appealChallengeID}</StyledPhaseKicker>
                <RevealVote
                  salt={this.props.salt}
                  onInputChange={this.props.onInputChange}
                  transactions={this.props.transactions}
                  modalContentComponents={this.props.modalContentComponents}
                />
              </StyledListingDetailPhaseCardSection>
            </StyledListingDetailPhaseCardContainer>
          </StyledCardBack>
        </StyledCard>
      </StyledCardStage>
    );
  }

  private renderRevealVote = (): JSX.Element => {
    if (!this.props.userHasCommittedVote) {
      return (
        <>
          <FormHeader>You did not participate in this challenge</FormHeader>
          <FormCopy>You did not commit a vote, so there is nothing here for you to reveal</FormCopy>
        </>
      );
    } else if (this.props.userHasRevealedVote) {
      return (
        <>
          <FormHeader>You have revealed your vote</FormHeader>
          <FormCopy>
            Thank you for participating! Please check back after the challenge ends to see if you have earned a reward{" "}
          </FormCopy>
        </>
      );
    } else {
      return (
        <>
          <FormHeader>Confirm Your Votes. Make Them Count!</FormHeader>
          <FormCopy>
            Confirm with your secret phrase and earn CVL tokens should the challenge results end in your favor.
          </FormCopy>
          <FullWidthButton size={buttonSizes.MEDIUM} onClick={this.swapFlipped}>
            Reveal My Vote
          </FullWidthButton>
        </>
      );
    }
  };

  private swapFlipped = (): void => {
    this.setState(() => ({ flipped: !this.state.flipped }));
  };
}
