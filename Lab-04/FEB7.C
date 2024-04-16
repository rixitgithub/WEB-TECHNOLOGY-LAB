#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define MAX_RELATION_SIZE 20
#define MAX_ATTRIBUTES 20

int numAttributes;
char relation[MAX_RELATION_SIZE][MAX_ATTRIBUTES];

// Function to check if a set of attributes is a superkey
bool isSuperKey(char key[MAX_ATTRIBUTES], int keySize, char candidateKey[MAX_ATTRIBUTES], int candidateKeySize) {
    for (int i = 0; i < keySize; i++) {
        bool found = false;
        for (int j = 0; j < candidateKeySize; j++) {
            if (key[i] == candidateKey[j]) {
                found = true;
                break;
            }
        }
        if (!found)
            return false;
    }
    return true;
}

// Function to check if a set of attributes is a candidate key
bool isCandidateKey(char candidateKey[MAX_ATTRIBUTES], int candidateKeySize) {
    for (int i = 0; i < numAttributes; i++) {
        if (candidateKey[i] == '\0') // Skip empty slots
            continue;
        char temp[MAX_ATTRIBUTES];
        memcpy(temp, candidateKey, MAX_ATTRIBUTES);
        temp[i] = '\0'; // Exclude one attribute at a time
        if (isSuperKey(relation[i], numAttributes, temp, candidateKeySize - 1))
            return false;
    }
    return true;
}

// Function to find the number of candidate keys
int findCandidateKeys() {
    char candidateKey[MAX_ATTRIBUTES] = {0}; // Initialize to empty set
    int count = 0;
    // Generate all subsets of attributes and check if each subset is a candidate key
    for (int i = 0; i < (1 << numAttributes); i++) {
        int candidateKeySize = 0;
        for (int j = 0; j < numAttributes; j++) {
            if (i & (1 << j)) {
                candidateKey[candidateKeySize++] = j;
            }
        }
        if (isCandidateKey(candidateKey, candidateKeySize)) {
            count++;
        }
    }
    return count;
}

int main() {
    printf("Enter the number of attributes: ");
    scanf("%d", &numAttributes);

    printf("Enter the attributes separated by space: ");
    for (int i = 0; i < numAttributes; i++) {
        scanf("%s", relation[i]);
    }

    int numCandidateKeys = findCandidateKeys();
    printf("Number of candidate keys: %d\n", numCandidateKeys);

    return 0;
}
