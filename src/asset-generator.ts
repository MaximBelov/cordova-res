import { InputAsset } from './input-asset';
import { OutputAsset } from './output-asset';
import { Project } from './project';

export abstract class AssetGenerator {
  constructor(public options: AssetGeneratorOptions) {}

  abstract generate(
    asset: InputAsset,
    project: Project,
  ): Promise<OutputAsset[]>;
}

export interface AssetGeneratorOptions {
  // Background color for icon generation
  iconBackgroundColor?: string;
  // Background color for icon generation for use in dark mode scenarios
  iconBackgroundColorDark?: string;
  // Background color for light mode splash generation
  backgroundColor?: string;
  // Background color for dark mode splash generation
  backgroundColorDark?: string;
}
